def get_from_file(file_path):
    with open(file_path, 'r') as file:
        return file.readlines()

def convert_text_list_to_array(text_list):
    return [{'id': index + 1, 'src': item.strip()} for index, item in enumerate(text_list)]

def main():
    text_list = get_from_file("list.txt")
    text_array_with_id = convert_text_list_to_array(text_list)
    with open("output.js", "w") as output_file:
      output_file.write(str(text_array_with_id))

if __name__ == "__main__":
    main()
