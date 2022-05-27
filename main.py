import sys
sys.path.insert(0, "/Users/MayheM/Desktop/python/projectHermes")
import analyze as anlz
from __init__ import client

import pandas as pd
import gspread
import df2gspread as d2g



gc = gspread.service_account(filename="/Users/MayheM/Desktop/python/projectAthena/keys/projectathena-343902-f19085d61fdd.json")

sh = gc.open("test sheet")

print(sh.sheet1.get('A1'))



# application
#  ├── app
#  │   └── folder
#  │       └── file_1.py
#  └── app2
#      └── some_folder
#          └── file_2.py