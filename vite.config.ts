import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'NModal',
                        'NDataTable',
                        'NMessageProvider',
                        'NTabs',
                        'NTabPane',
                        'NSpace',
                        'NFlex',
                        'NSpin',
                        'NLayout',
                        'NLayoutHeader',
                        'NLayoutSider',
                        'NLayoutFooter',
                        'NLayoutContent',
                        'NGrid',
                        'NGridItem',
                        'NList',
                        'NListItem',
                        'NCard',
                        'NButton',
                        'NForm',
                        'NFormItem',
                        'NInput',
                        'NSelect',
                        'NOption',
                        'NSpace',
                        'NTag',
                        'NIcon',
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        })],
})
