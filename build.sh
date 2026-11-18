export TWEEGO_PATH=devTools/tweego/storyFormats

TARGET="Life_as_a_Boy.html"

tweego -o "$TARGET" Passages/

if [ $? -eq 0 ]; then
    echo "Done: \"$TARGET\""
fi
