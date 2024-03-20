prefix="text-"
if `git status | grep "master"&/dev/null`; then
 prefix="pro-master"
fi
if [$1] && [$1='pre-'];then
  prefix="pre-"
fi
function db-tag() {
    git push 
    git pull --tags 
    local new_tag=$(echo ${prefix}db-$(date +'%Y-%m-%d'))
    echo ${new_tag}
    git tag ${new_tag}
    git push origin $new_tag
}    
db-tag;
# -$(git tag -l "${prefix}db-$(date +'%Y-%m-%d)-*" | wc -l| xargs printf "%s)