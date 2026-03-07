import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonicalUrl, schema }) => {
    useEffect(() => {
        document.title = title;

        // Update or create meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description;

        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        if (keywords) {
            metaKeywords.content = keywords;
        }

        // Update or create canonical link
        if (canonicalUrl) {
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
                linkCanonical = document.createElement('link');
                linkCanonical.rel = 'canonical';
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.href = canonicalUrl;
        }

        // Update or create JSON-LD schema
        if (schema) {
            let scriptSchema = document.querySelector('script[id="schema-json-ld"]');
            if (!scriptSchema) {
                scriptSchema = document.createElement('script');
                scriptSchema.type = 'application/ld+json';
                scriptSchema.id = 'schema-json-ld';
                document.head.appendChild(scriptSchema);
            }
            scriptSchema.textContent = JSON.stringify(schema);
        }

        return () => {
            // Cleanup on unmount if needed
        };
    }, [title, description, keywords, canonicalUrl, schema]);

    return null;
};

export default SEO;
