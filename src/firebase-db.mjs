import {db} from "./firebase-config";

export function saveRecord(collectionName, event) {
    db.collection(collectionName).add(event);
}