import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        const frontVideoMaterial = {
            videoMap: "frontVideoTag",
            emissiveVideoMap: "frontVideoTag",
            emissiveIntensity: 0.0,
            emissive: "#FFFFFF",
        }

        try {            
            console.log(await vctrApi.getObjects());

            vctrApi.updateMaterial("mat25", frontVideoMaterial);

            //Example
            await vctrApi.setScaleRelative("Wall_Art_Blank_Template", [0.5, 0.5, 0.5]);

            await vctrApi.setPositionAbsolute("Wall_Art_Blank_Template", [0.0, -0.2, 0.0]);


        } catch (e) {
            errHandler(e);
        }

    }
    const vctrApi = new VctrApi("84e5aa63-ffa0-4ce7-85c5-53fa5f85f3cd", errHandler);
    try {
        await vctrApi.init();
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();