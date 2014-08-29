$().ready(function() {
        var ascensor = $('#ascensor').ascensor({
            childType: "section",
            // name of the floor,showed as '#XXX'
            ascensorFloorName: ["home", "blog", "project", "slides", "test1", "about", "support"],
            // slide time
            time: 400,
            WindowsFocus: true,
            WindowsOn: 0,
            //slide direction
            //[x, y] means the floor is at location[x, y]
            direction: [
                //0 0 0 7
                //1 2 0 6
                //0 3 4 5
                [1, 0], //1
                [1, 1], //2
                [2, 1], //3
                [2, 2], //4
                [2, 3], //5
                [1, 3], //6
                [0, 3] //7
            ],
            NavigationDirection: 'xy',
            Direction: 'y',
            Navig: true,
            Link: false,
            ReturnURL: true,
            PrevNext: true,
            CSSstyles: true,

            KeyArrow: true,
            keySwitch: true,
            ReturnCode: false,

            ChocolateAscensor: true,
            AscensorMap: '4|2',
            ContentCoord: '1|1 & 1|2 & 1|3 & 1|4 & 2|4 & 2|3 & 2|2 & 2|1'
        });
        ascensor.on("scrollStart", function(e, floor) {
            console.log('scrollStart from ' + floor.from) // Return the origin floor
            console.log('scrollStart to ' + floor.to) // Return the targeted floor
        });

        ascensor.on("scrollEnd", function(e, floor) {
            console.log('scrollEnd from' + floor.from) // Return the origin floor
            console.log('scrollEnd to' + floor.to) // Return the targeted floor
        });

        $(".links-to-floor li:eq(" + ascensor.data("current-floor") + ")").addClass("selected"), $(".links-to-floor li").click(function() {
            ascensor.trigger("scrollToStage", $(this).index())
        }), ascensor.on("scrollStart", function(e, o) {
            $(".links-to-floor li").removeClass("selected"), $(".links-to-floor li:eq(" + o.to + ")").addClass("selected")
        }), $(".prev").click(function() {
            ascensor.trigger("prev")
        }), $(".next").click(function() {
            ascensor.trigger("next")
        }), $(".up").click(function() {
            ascensor.trigger("scrollToDirection", "up")
        }), $(".down").click(function() {
            ascensor.trigger("scrollToDirection", "down")
        }), $(".left").click(function() {
            ascensor.trigger("scrollToDirection", "left")
        }), $(".right").click(function() {
            ascensor.trigger("scrollToDirection", "right")
        });
    });