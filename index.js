const main = async() => {
    const response = await fetch("./airbnb_sf_listings_500.json");
    const data = await response.json();
    const first50data = data.slice(0, 50);
    const listingsHtml = first50data.map(listing => `
        <div class="listing">
            <h2>${listing.name}</h2>
            <div class="listing_description"><b>Description:</b> ${listing.description}</div>
            <br />
            <div class="listing_amenities"><b>Amenities:</b> ${JSON.parse(listing.amenities).join(", ")}</div>
            <br />
            <div class="listing_host">
                <div class="listing_host--name"><b>Host name:</b> ${listing.host_name}</div>
                <img
                    class="listing_host--photo"
                    src="${listing.host_thumbnail_url}"
                    alt="listing host photo"
                >
            </div>
            <br />
            <div class="listing_price"><b>Price:</b> ${listing.price}</div>
            <br />
            <img
                class="listing_thumbnail"
                src="${listing.picture_url}"
                alt="listing thumbnail"
            >
        </div>
    `).join("");
    document.getElementsByClassName("listing_container")[0].innerHTML = listingsHtml;
};
main();
