function raw_extrude_1_outline_fn(){
    return new CSG.Path2D([[-59,-119.01476],[-59,108]]).appendArc([-57,110],{"radius":2,"clockwise":true,"large":false}).appendPoint([153,110]).appendArc([155,108],{"radius":2,"clockwise":true,"large":false}).appendPoint([155,38.0061436]).appendArc([154.9999622,37.9938504],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.2607755,-82.2635689]).appendArc([153.1437265,-84.0458409],{"radius":2,"clockwise":true,"large":false}).appendPoint([76.4245688,-121.7911152]).appendArc([75.5268412,-121.9964951],{"radius":2,"clockwise":true,"large":false}).appendPoint([-57.0148144,-121.0147051]).appendArc([-59,-119.01476],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[82.3862067,-52.9772413],[95.3765877,-60.4772413]]).appendArc([98.1086385,-59.7451905],{"radius":2,"clockwise":false,"large":false}).appendPoint([105.6086385,-46.7548095]).appendArc([104.8765877,-44.0227587],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.8862067,-36.5227587]).appendArc([89.1541559,-37.2548095],{"radius":2,"clockwise":false,"large":false}).appendPoint([81.6541559,-50.2451905]).appendArc([82.3862067,-52.9772413],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[108.3669688,-67.9772413],[121.3573498,-75.4772413]]).appendArc([124.0894006,-74.7451905],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.5894006,-61.7548095]).appendArc([130.8573498,-59.0227587],{"radius":2,"clockwise":false,"large":false}).appendPoint([117.8669688,-51.5227587]).appendArc([115.134918,-52.2548095],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.634918,-65.2451905]).appendArc([108.3669688,-67.9772413],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[63.5,-30.5],[78.5,-30.5]]).appendArc([80.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.5,-13.5]).appendArc([78.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.5,-11.5]).appendArc([61.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.5,-28.5]).appendArc([63.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[22.5,-30.5],[37.5,-30.5]]).appendArc([39.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([39.5,-13.5]).appendArc([37.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([22.5,-11.5]).appendArc([20.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([20.5,-28.5]).appendArc([22.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-30.5],[7.5,-30.5]]).appendArc([9.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.5,-13.5]).appendArc([7.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-7.5,-11.5]).appendArc([-9.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.5,-28.5]).appendArc([-7.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-37.5,-30.5],[-22.5,-30.5]]).appendArc([-20.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-20.5,-13.5]).appendArc([-22.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-37.5,-11.5]).appendArc([-39.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-39.5,-28.5]).appendArc([-37.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-37.5,71.5],[-22.5,71.5]]).appendArc([-20.5,73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-20.5,88.5]).appendArc([-22.5,90.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-37.5,90.5]).appendArc([-39.5,88.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-39.5,73.5]).appendArc([-37.5,71.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-37.5,-9.5],[-22.5,-9.5]]).appendArc([-20.5,-7.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-20.5,64.5]).appendArc([-22.5,66.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-37.5,66.5]).appendArc([-39.5,64.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-39.5,-7.5]).appendArc([-37.5,-9.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,71.5],[83.5,71.5]]).appendArc([85.5,73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,88.5]).appendArc([83.5,90.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-7.5,90.5]).appendArc([-9.5,88.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.5,73.5]).appendArc([-7.5,71.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-9.5],[83.5,-9.5]]).appendArc([85.5,-7.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,64.5]).appendArc([83.5,66.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-7.5,66.5]).appendArc([-9.5,64.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.5,-7.5]).appendArc([-7.5,-9.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D([[186,-78.8824096],[186,108]]).appendArc([188,110],{"radius":2,"clockwise":true,"large":false}).appendPoint([471,110]).appendArc([473,108],{"radius":2,"clockwise":true,"large":false}).appendPoint([473,-117.0089887]).appendArc([471.009009,-119.0089684],{"radius":2,"clockwise":true,"large":false}).appendPoint([251.5709471,-119.9974282]).appendArc([250.5137433,-119.7007651],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.9518052,-80.5857263]).appendArc([186,-78.8824096],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[218.6426502,-75.4772413],[231.6330312,-67.9772413]]).appendArc([232.365082,-65.2451905],{"radius":2,"clockwise":false,"large":false}).appendPoint([224.865082,-52.2548095]).appendArc([222.1330312,-51.5227587],{"radius":2,"clockwise":false,"large":false}).appendPoint([209.1426502,-59.0227587]).appendArc([208.4105994,-61.7548095],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.9105994,-74.7451905]).appendArc([218.6426502,-75.4772413],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[244.6234123,-60.4772413],[257.6137933,-52.9772413]]).appendArc([258.3458441,-50.2451905],{"radius":2,"clockwise":false,"large":false}).appendPoint([250.8458441,-37.2548095]).appendArc([248.1137933,-36.5227587],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.1234123,-44.0227587]).appendArc([234.3913615,-46.7548095],{"radius":2,"clockwise":false,"large":false}).appendPoint([241.8913615,-59.7451905]).appendArc([244.6234123,-60.4772413],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[261.5,-30.5],[276.5,-30.5]]).appendArc([278.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.5,-13.5]).appendArc([276.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([261.5,-11.5]).appendArc([259.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.5,-28.5]).appendArc([261.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[302.5,-30.5],[317.5,-30.5]]).appendArc([319.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([319.5,-13.5]).appendArc([317.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([302.5,-11.5]).appendArc([300.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([300.5,-28.5]).appendArc([302.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[332.5,-30.5],[347.5,-30.5]]).appendArc([349.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([349.5,-13.5]).appendArc([347.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([332.5,-11.5]).appendArc([330.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([330.5,-28.5]).appendArc([332.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[362.5,-30.5],[377.5,-30.5]]).appendArc([379.5,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([379.5,-13.5]).appendArc([377.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([362.5,-11.5]).appendArc([360.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([360.5,-28.5]).appendArc([362.5,-30.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[398.5,-28.5],[451.5,-28.5]]).appendArc([453.5,-26.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([453.5,-11.5]).appendArc([451.5,-9.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([436.5,-9.5]).appendArc([434.5,-7.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([434.5,7.5]).appendArc([432.5,9.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([417.5,9.5]).appendArc([415.5,7.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([415.5,-7.5]).appendArc([413.5,-9.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([398.5,-9.5]).appendArc([396.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([396.5,-26.5]).appendArc([398.5,-28.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[398.5,28.5],[451.5,28.5]]).appendArc([453.5,30.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([453.5,83.5]).appendArc([451.5,85.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([398.5,85.5]).appendArc([396.5,83.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([396.5,30.5]).appendArc([398.5,28.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[262.5,71.5],[391.5,71.5]]).appendArc([393.5,73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([393.5,88.5]).appendArc([391.5,90.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.5,90.5]).appendArc([260.5,88.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([260.5,73.5]).appendArc([262.5,71.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[262.5,-9.5],[391.5,-9.5]]).appendArc([393.5,-7.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([393.5,64.5]).appendArc([391.5,66.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.5,66.5]).appendArc([260.5,64.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([260.5,-7.5]).appendArc([262.5,-9.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
))).extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = raw_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        