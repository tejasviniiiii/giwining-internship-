let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumnail = document.querySelectorAll('.thumnail .item');

//config param
let countItem = items.length;
let itemActive + 1;
//event next click
next.onclick = function()
{
	itemActive = itemActive + 1;
	if(itemActive >= countItem)
	{
		itemActive = 0;
	}
	showSlider();
}
//event prev click
prev.onclick = function()
{
	itemActive = itemActive - 1;
	if(itemActive < 0){
		itemActive = countItem - 1;
	}
	showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
	next.click();
}, 3000)
function showSlider()
{
	//remove Item active old
	let itemActiveOld = document.querySelector('.slider .list .item.active');
	let thumnailActiveOld = document.querySelector('.thumnail .item.active');
	itemActiveOld.classlist.remove('active');
	thumnailActiveOld.classlist.remove('active');

	//active new item
	items[itemActive].classlist.add('active');
	thumnails[itemActive].classlist.add('active');

	//clear auto time run slider
	clearIterval(refreshInterval);
	refreshInterval = setInterval(() => {
		next.click();
	}, 5000)
}

//click thumnail
thumnails.forEach((thumnail, index) => {
	thumnail.addEventlistener('click', () => {
		itemActive = index;
		showSlider();
	})
})