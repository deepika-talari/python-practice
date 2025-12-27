steps to add code from vscode to github

1. first main step should be adding ssh key to github
   generate using:
   ssh-keygen -t ed25519 -C "comments"     -t ed.... is for secure form not default RSA
   it gets saved in .ssh folder
   copy the public key from folder using ls ~/.ssh and cat pubkey and paste it in github settings
2. git init
3. git add filename
4. git status
5. git commit -m "msg"
6. git remote add origin git@github.com:deepika-talari/python-practice.git
7. git push -u origin main
   
