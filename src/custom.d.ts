type RootState = {
    recordList: RecordItem[],
    createRecordError:Error | null,
    tagList: Tag[],
    currentTag?: Tag,
}
type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string;
};
type Tag = {
    id: string,
    name: string;
};

