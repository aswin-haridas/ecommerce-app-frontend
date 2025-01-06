import os
import json
import random

def generate_file_list():
    try:
        base_path = os.path.dirname(os.path.abspath(__file__))
        file_data = []

        for folder_name in ["men", "women"]:
            folder_path = os.path.join(base_path, folder_name)

            if not os.path.isdir(folder_path):
                print(f"Error: {folder_path} is not a valid directory.")
                continue

            for root, _, files in os.walk(folder_path):
                parent_folder = os.path.basename(root)

                for count, filename in enumerate(files, start=1):
                    file_path = os.path.join(root, filename)

                    if os.path.isfile(file_path):
                        react_path = file_path.replace(base_path, "").replace("\\", "/").lstrip("/")
                        file_data.append({
                            id: len(file_data) + 1,
                            category: parent_folder,
                            file_name: filename,
                            file_path: react_path,
                            price:random.randint(300, 2000),
                            rating:random.uniform(3, 5).__round__(2),
                        })

        # Write data to a JSON file
        output_file = os.path.join(base_path, "products.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(file_data, f, indent=4)

        print(f"File list has been saved to {output_file}.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example Usage
generate_file_list()