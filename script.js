/** @format */

const defaultFooter = document.getElementById("default-footer");
const sharedFooter = document.getElementById("shared-footer");
const desktopSharedFooter = document.getElementById("desktop-shared-footer");
const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
	icon.addEventListener("click", function () {
		const sharedFooterStyle = window.getComputedStyle(sharedFooter);
		if (sharedFooterStyle.display === "none") {
			defaultFooter.style.display = "none";
			sharedFooter.style.display = "flex";
		} else {
			sharedFooter.style.display = "none";
			defaultFooter.style.display = "flex";
		}
	});
});

const mediaQuery = window.matchMedia("(min-width: 600px)");
function updateBackgroundColor(event) {
	if (!event.matches) {
		document
			.querySelector(".default-footer-button")
			.addEventListener("click", () => {
				desktopSharedFooter.style.display = "none";
			});
	} else {
		toggleIcons.forEach((icon) => {
			icon.addEventListener("click", () => {
				sharedFooter.style.display = "none";
				defaultFooter.style.display = "flex";
				desktopSharedFooter.style.display = "block";
			});
		});
	}
	if (window.innerWidth < 600) {
		desktopSharedFooter.style.display = "none";
	}
}

updateBackgroundColor(mediaQuery);

mediaQuery.addEventListener("change", updateBackgroundColor);
