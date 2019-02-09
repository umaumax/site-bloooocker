#!/usr/bin/env bash
function append_blacklist() {
	local URL=$1
	[[ -n $URLS_SRC_GENERATED ]] && URLS_SRC_GENERATED="$URLS_SRC_GENERATED, "
	URLS_SRC_GENERATED="$URLS_SRC_GENERATED"'"'"$URL/*"'"'
}

cat blacklist.txt | sort | uniq >blacklist.txt~
mv blacklist.txt~ blacklist.txt

URLS=($(cat blacklist.txt | grep -v "^#"))
for URL in "${URLS[@]}"; do
	if [[ $URL =~ ^http ]]; then
		append_blacklist "$URL"
	else
		append_blacklist "http://$URL"
		append_blacklist "https://$URL"
	fi
done

echo "${URLS_SRC_GENERATED[@]}"

eval "cat <<EOF
$(<background.base.js)
EOF
" 2>/dev/null >background.js

eval "cat <<EOF
$(<manifest.base.json)
EOF
" 2>/dev/null >manifest.json

if [[ $(uname) == "Darwin" ]]; then
	cat blacklist.txt | grep -v '^#' | xargs defaults write com.google.Chrome URLBlacklist -array
	echo ''
	echo 'update chrome setting!'
	echo 'chrome://policy'
fi
