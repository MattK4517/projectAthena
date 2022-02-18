import sys
sys.path.insert(0, "/Users/mkundla/Desktop/code_projects/projectHermes")
import analyze as anlz
from __init__ import client



print(anlz.get_top_builds(client, "Achilles", "Solo", "9.1"))
# application
#  ├── app
#  │   └── folder
#  │       └── file_1.py
#  └── app2
#      └── some_folder
#          └── file_2.py