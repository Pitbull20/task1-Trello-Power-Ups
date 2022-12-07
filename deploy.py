import os
from datetime import datetime

now = datetime.now()

current_time = now.strftime("%H:%M")

os.system("git add .")
print("add files-----------> OK")
os.system("git commit -m {}".format("update"))
print("commit-----------> OK")
os.system("git push")
print("Push-----------> DONE in {}".format(current_time))