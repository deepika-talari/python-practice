✅ Steps to Add Code from VS Code to GitHub (Using SSH)
🔹 Step 1: Generate & Add SSH Key to GitHub (One-time setup)

Generate a secure SSH key (ED25519 is more secure and modern than default RSA):

ssh-keygen -t ed25519 -C "your_email_or_comment"


-t ed25519 → modern & secure algorithm

-C → comment (usually email)

Key is saved in ~/.ssh/

Start SSH agent and add the key:

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519


List keys and copy public key:

ls ~/.ssh
cat ~/.ssh/id_ed25519.pub


👉 Copy the output and paste it in:
GitHub → Settings → SSH and GPG keys → New SSH key

Test connection:

ssh -T git@github.com

🔹 Step 2: Open Project in VS Code
cd python-practice
code .

🔹 Step 3: Initialize Git Repository
git init


Check status:

git status

🔹 Step 4: Add Files to Staging Area

Add a specific file:

git add filename.py


Or add all files:

git add .

🔹 Step 5: Commit Changes
git commit -m "Initial commit"

🔹 Step 6: Connect Local Repo to GitHub
git remote add origin git@github.com:deepika-talari/python-practice.git


Verify remote:

git remote -v

🔹 Step 7: Push Code to GitHub

Rename branch to main (if needed):

git branch -M main


Push:

git push -u origin main


✅ Your VS Code project is now on GitHub 🎉

🧠 Interview Tip (Important)

If asked “Why ED25519 instead of RSA?”, say:

ED25519 is faster, more secure, and uses smaller keys compared to RSA. GitHub recommends it for SSH authentication.



1️⃣ eval "$(ssh-agent -s)"
🔹 What this command does

It starts the SSH agent and makes it available to your current terminal session.

🔹 Break it down

ssh-agent → Program that manages SSH keys in memory

-s → Outputs shell commands (for bash/zsh)

$(...) → Runs the command inside and captures its output

eval → Executes that output in your current shell

🔹 In simple words

“Start the SSH agent and connect it to my current terminal.”

Without eval, the agent would start but your terminal wouldn’t know how to talk to it.

2️⃣ ssh-add ~/.ssh/id_ed25519
🔹 What this command does

It adds your private SSH key to the running SSH agent.

🔹 Break it down

ssh-add → Tool to load keys into the SSH agent

~ → Your home directory

.ssh/ → Folder where SSH keys are stored

id_ed25519 → Your private SSH key file

⚠️ Important:
You add the private key, NOT the .pub file.
