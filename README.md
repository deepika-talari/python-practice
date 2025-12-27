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
