git filter-branch --commit-filter \
'export GIT_AUTHOR_NAME="Arpit Bhayani";\
export GIT_AUTHOR_EMAIL=arpit.b.bhayani@gmail.com;\
export GIT_COMMITTER_NAME="Arpit Bhayani";\
export GIT_COMMITTER_EMAIL=arpit.b.bhayani@gmail.com;\
git commit-tree -f "$@"'
