import os

os.system("git add .")
print("add files-----------> OK")
os.system("git commit -m {}".format("update"))
print("commit-----------> OK")
os.system("git push")
print("Push-----------> DONE")