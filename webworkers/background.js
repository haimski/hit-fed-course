var total = 2;
outer: for(var n=1;n<=100000;n++)
{
    for (var i = 2; i <= Math.sqrt(n); i += 1)
    {
        if (n % i == 0) continue outer;
    }
    total++;
    postMessage(total);
}