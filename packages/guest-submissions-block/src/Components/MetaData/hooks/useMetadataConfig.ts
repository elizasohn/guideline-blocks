import { Settings } from "../../../types";
import { FormValues } from "../Metadata";
import { MetadataProps } from "../type";
import { AssetSubmissionRequestType } from "../../../module/AssetSubmission/type";

type MetadataIds = {
    [key: string]: string | boolean | number | AssetSubmissionRequestType;
};

export const DATA_DELIMINATOR = "--#--";

export const useMetadataConfig = (
    blockSettings: Settings
): [FormValues, MetadataProps[]] => {
    const metadataConfiguration = getMetadataConfiguration(blockSettings);

    return [getDefaultValues(metadataConfiguration), metadataConfiguration];
};

const getMetadataConfiguration = (blockSettings: Settings): MetadataProps[] => {
    const initialMetadataConfiguration = parseAndSetRequiredFields(
        blockSettings.assetSubmissionMetadataConfig
    );
    const activatedMetadataIds = filterActiveMetadata(blockSettings);

    return setActiveMetadataFields(
        activatedMetadataIds,
        initialMetadataConfiguration
    );
};

const parseAndSetRequiredFields = (
    assetSubmissionMetadataConfig: AssetSubmissionRequestType,
    required: boolean = false
): MetadataProps[] =>
    JSON.parse(assetSubmissionMetadataConfig.configuration).map(
        (entry: MetadataProps) => ({ ...entry, isRequired: required })
    );

const filterActiveMetadata = (blockSettings: Settings): MetadataIds[] =>
    Object.entries(blockSettings)
        .filter(([key, value]) => key.includes(DATA_DELIMINATOR) && !!value)
        .map(([key, value]) => ({ [key]: value }));

const setActiveMetadataFields = (
    activeMetadataIds: MetadataIds[],
    initialMetadataConfig: MetadataProps[]
): MetadataProps[] =>
    activeMetadataIds.reduce((acc: MetadataProps[], cur) => {
        const [key] = Object.keys(cur);
        const [_, id, modifier] = key.split(DATA_DELIMINATOR);
        const metadataEntry = initialMetadataConfig.find(
            (item) => item.id === id
        );
        if (!!modifier || !metadataEntry) {
            return acc || [];
        }
        const metadataConfig = withConditionalFields(
            activeMetadataIds,
            id,
            metadataEntry
        );

        return acc ? [...acc, metadataConfig] : [metadataConfig];
    }, []);

const withConditionalFields = (
    activeMetadataIds: MetadataIds[],
    id: string,
    metadataConfig: MetadataProps
): MetadataProps => {
    activeMetadataIds.forEach((entry) => {
        const matchingKey = Object.keys(entry).find(
            (key) =>
                key.includes(id) &&
                (key.includes("required") || key.includes("label"))
        );
        if (matchingKey) {
            const [, , modifier] = matchingKey.split(DATA_DELIMINATOR);
            if (modifier === "required") {
                metadataConfig.isRequired = !!entry[matchingKey];
            } else if (modifier === "label") {
                metadataConfig.name = entry[matchingKey] as string;
            }
        }
    });

    return metadataConfig;
};

const getDefaultValues = (metadataConfiguration: MetadataProps[]): FormValues =>
    metadataConfiguration.reduce((prev: FormValues, cur) => {
        if (!!cur.defaultValue) {
            return { ...prev, [cur.id]: cur.defaultValue };
        }
        return prev;
    }, {});
