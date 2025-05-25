// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level2":return tiles.createTilemap(hex`0a000700030f100a0f0f0a0f0f050d11111111111111020e0d11111111111111110e0c11111111111111110b0d11111111111111110e0d01111111111111110e04070709080709070706`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile7,myTiles.tile8,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "startTile":
            case "tile7":return tile7;
            case "goalTile":
            case "tile8":return tile8;
            case "coinTile":
            case "tile9":return tile9;
            case "transparency16":return transparency16;
            case "floorTile":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
