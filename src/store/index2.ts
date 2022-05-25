//1、全局变量太多 2、严重依赖window
import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';

const store = {

    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => {
        return recordListModel.create(record);
    },

    tagList: tagListModel.fetch(),
    findTag(id: string){
        return this.tagList.filter(item => item.id === id)[0];
    },
    createTag: (name: string) => {
        if (name === '') {
            window.alert('标签名不能为空');
        } else {
            const message = tagListModel.create(name);
            if (message === 'duplicated') {
                window.alert('标签名重复');
            } else if (name === 'success') {
                window.alert('添加成功');
            }
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    }
};

export default store;

