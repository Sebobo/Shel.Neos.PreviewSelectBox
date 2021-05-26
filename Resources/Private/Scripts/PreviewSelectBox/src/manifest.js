import manifest from "@neos-project/neos-ui-extensibility";
import PreviewSelectBoxEditor from "./PreviewSelectBoxEditor";

manifest("Shel.Neos:PreviewSelectBoxEditor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Shel.Neos/PreviewSelectBoxEditor", {
        component: PreviewSelectBoxEditor,
    });
});
