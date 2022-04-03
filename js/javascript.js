$(document).ready(function () {

    // Homepage banner
    $('#owl-homepageBanner').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:1,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='img/banner-prev.png'>", "<img src='img/banner-next.png'>"]
    });

    
    // map script
    if ($('#map').length > 0) {
        
        var root = am5.Root.new("map");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: false,
                panY: false,
                wheelY: false,
            })
        );

        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_czechRepublicLow
            })
        );
        
        polygonSeries.mapPolygons.template.setAll({
            fill: am5.color("#e6edf1"),
            strokeWidth:  2,
            stroke: am5.color("#ffffff"),
            toggleKey: "active",
            interactive: true,
        });

        polygonSeries.mapPolygons.template.states.create("active", {
            fill: am5.color("#b9453d"),
        });
        
        
        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color("#b9453d"),
        });

        var previousPolygon;

        polygonSeries.mapPolygons.template.on("active", function (active, target) {
            if (previousPolygon && previousPolygon != target) {
                previousPolygon.set("active", false);
            }
            previousPolygon = target;
        });


        // click on region event

        polygonSeries.mapPolygons.template.events.on("click", function(ev) {
            // name of region
            console.log(ev.target.dataItem.dataContext.name);
        });

    }
});