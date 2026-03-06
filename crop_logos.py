from PIL import Image, ImageOps
import sys
import os

def crop_and_clean(input_path, output_path):
    print("Processing", input_path)
    # Open the image
    img = Image.open(input_path).convert("RGBA")
    
    # We want to remove the black borders (since they are phone screenshots)
    gray = img.convert("L")
    mask = gray.point(lambda p: 255 if p > 30 else 0)
    bbox = mask.getbbox()
    
    if bbox:
        img_cropped = img.crop(bbox)
        
        # optionally make white transparent
        data = img_cropped.getdata()
        new_data = []
        for item in data:
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                new_data.append((255, 255, 255, 0)) # transparent
            else:
                new_data.append(item)
        img_cropped.putdata(new_data)
        
        img_cropped.save(output_path, "PNG")
        print(f"Processed {input_path} -> {output_path}")
    else:
        print("Could not crop", input_path)

os.makedirs("frontend/public/logos", exist_ok=True)

crop_and_clean("C:/Users/lucky/.gemini/antigravity/brain/6bbb9f0c-68b5-414b-abfa-c5771c3c67d9/media__1772828942807.jpg", "frontend/public/logos/ayushman.png")
crop_and_clean("C:/Users/lucky/.gemini/antigravity/brain/6bbb9f0c-68b5-414b-abfa-c5771c3c67d9/media__1772828951552.jpg", "frontend/public/logos/himcare.png")
crop_and_clean("C:/Users/lucky/.gemini/antigravity/brain/6bbb9f0c-68b5-414b-abfa-c5771c3c67d9/media__1772828962680.png", "frontend/public/logos/echs.png")
crop_and_clean("C:/Users/lucky/.gemini/antigravity/brain/6bbb9f0c-68b5-414b-abfa-c5771c3c67d9/media__1772828974005.png", "frontend/public/logos/nabh.png")
