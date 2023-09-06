

const settings= {
    online: false,
    herokuserver: false,
    useOrbitals:true,

    hidePlayer: false,
    stopCursorCapture:true,
    hideOtherPlayers: true,
    ignoreCameraFollowPlayer: false,

    hideSky: true,
    hideGround: true,
    hideCubes:false,
    hideCubeRigidBodyLines: true, //doesn't work yet
    ignoreCubeRigidBody: true,
    hideTextSelect: true,
    hideUIContent:true,

    showtexturesfromcubeheight: false,

    
    activeTexture: 'AllMinecraftTexture',
    startingPositionDefault:[30,30,30],
    startingRotationDefault:[-50 *Math.PI/180,225 *Math.PI/180,0],
    FullWorldChunkSideLength: 16
}


export default settings

/* Default settings


online: false,
herokuserver: false,
useOrbitals:false,

hidePlayer: false,
hideOtherPlayers: true,
ignoreCameraFollowPlayer: false,

hideSky: false,
hideGround: false,
hideCubes:false,
hideCubeRigidBody: false,
ignoreCubeRigidBody: true,
hideTextSelect: false,
hideUIContent:false,


activeTexture: 'AllMinecraftTexture'



*/