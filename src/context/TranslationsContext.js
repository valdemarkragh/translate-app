import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

const TranslationsContext = React.createContext();

export function useTranslations() {
    return useContext(TranslationsContext);
}

export function TranslationsProvider({ children }) {
    const { currentUser } = useAuth();
    const [translations, setTranslations] = useState([]);
    const [loading, setLoading] = useState(true);

    function addTranslation(translation) {
        return db.collection("translations").add({
            ...translation,
            created_at: firebase.firestore.Timestamp.fromDate(new Date()),
        });
    }

    function deleteTranslation(id) {
        return db.collection("translations").doc(id).update({
            deleted: true,
        });
    }

    useEffect(() => {
        const unsubscribe = db
            .collection("translations")
            .where("uid", "==", currentUser.uid)
            .where("deleted", "==", false)
            .orderBy("created_at", "desc")
            .limit(10)
            .onSnapshot((snapshot) => {
                const translation = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setTranslations(translation);
                setLoading(false);
            });
        return () => {
            unsubscribe();
        };
    }, [currentUser]);

    const value = {
        translations,
        addTranslation,
        deleteTranslation,
    };

    return (
        <TranslationsContext.Provider value={value}>
            {!loading && children}
        </TranslationsContext.Provider>
    );
}
