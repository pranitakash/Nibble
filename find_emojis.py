import os
import re

def find_emojis(directory):
    emoji_pattern = re.compile(r'[^\x00-\x7F]+')
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        for file in files:
            if file.endswith(('.tsx', '.ts', '.html', '.css')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        matches = emoji_pattern.findall(content)
                        if matches:
                            print(f"{path}: {', '.join(set(matches))}")
                except Exception as e:
                    pass

if __name__ == "__main__":
    find_emojis('src')
