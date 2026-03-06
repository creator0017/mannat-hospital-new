from PIL import Image
import os

def process_logo(input_path, output_path):
    print("Processing", input_path)
    # Open the image
    img = Image.open(input_path).convert("RGBA")
    
    # We want to remove the black borders (since they are phone screenshots)
    gray = img.convert("L")
    mask = gray.point(lambda p: 255 if p > 30 else 0)
    bbox = mask.getbbox()
    
    if bbox:
        img_cropped = img.crop(bbox)
        
        # Make near-white background transparent
        data = img_cropped.getdata()
        new_data = []
        for item in data:
            # Check if pixel is white or near-white
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                new_data.append((255, 255, 255, 0)) # transparent
            else:
                new_data.append(item)
        img_cropped.putdata(new_data)
        
        img_cropped.save(output_path, "PNG")
        print(f"Processed {input_path} -> {output_path}")
    else:
        print("Could not crop", input_path)

os.makedirs("frontend/public/logos", exist_ok=True)

base_path = "C:/Users/lucky/.gemini/antigravity/brain/6bbb9f0c-68b5-414b-abfa-c5771c3c67d9/"
process_logo(base_path + "media__1772831225620.png", "frontend/public/logos/hp_govt.png")
process_logo(base_path + "media__1772831235078.png", "frontend/public/logos/ayushman.png")
process_logo(base_path + "media__1772831245758.png", "frontend/public/logos/himcare.png")
process_logo(base_path + "media__1772831260535.png", "frontend/public/logos/echs.png")
process_logo(base_path + "media__1772831272175.png", "frontend/public/logos/nabh.png")
