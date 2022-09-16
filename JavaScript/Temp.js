let count = 0;

while (count < 10) {
    ++count;
    // if (count % 5 == 0)
    // break;

    if (count % 2 == 0) continue;
    
    else
        console.log("count = ", count);
}