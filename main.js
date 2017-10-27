const img = document.getElementsByTagName('img')[0];
img.onload = () => console.log(`width: ${img.width}\nheight: ${img.height}`);
