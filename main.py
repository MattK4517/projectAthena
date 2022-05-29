import df2gspread as d2g
import gspread
import pandas as pd
# from main import client
# import analyze as anlz
# import sys
# sys.path.insert(1, "/Users/MayheM/Desktop/python/projectHermes")


with open("filepath.txt", "r") as f:
    filepath = f.readline()
print(filepath)
gc = gspread.service_account(filename=filepath)

sh = gc.open("test sheet")

print(sh.sheet1.get('A1'))


# application
#  ├── app
#  │   └── folder
#  │       └── file_1.py
#  └── app2
#      └── some_folder
#          └── file_2.py
