modulex.config('alias', {
    'modulex-dom': 'dom',
    'dom/selector': Feature.isQuerySelectorSupported() ? '' : 'query-selector',
    dom: [
        'dom/base',
            UA.ieMode < 9 ? 'dom/ie' : ''
    ]
});