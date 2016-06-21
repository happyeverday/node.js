{
    'targets':[
        {
            'target_name':'hello',
            'source':[
            'src/hello.cc'
            ],
            'conditions':[
                [
                    'OS == "mac"',
                    {
                        'libraries':['-lnode.lib']
                    }
                ]
            ]
        }
    ]
}
