(window.webpackJsonp = window.webpackJsonp || []).push([
    [8],
    {
        RJKl: function (e, t, a) {
            'use strict';
            a.r(t),
                a.d(t, 'default', function () {
                    return f;
                });
            var n = a('dI71'),
                s = a('3WF5'),
                i = a.n(s),
                c = a('1iNE'),
                l = a.n(c),
                r = a('k8Y/'),
                o = a.n(r),
                p = a('mwIZ'),
                m = a.n(p),
                d = a('Zsd2'),
                u = a.n(d),
                h = a('q1tI'),
                g = a.n(h),
                E = a('Kvkj'),
                v = a('bTmn'),
                N = a('7Qib'),
                f = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    return (
                        Object(n.a)(t, e),
                        (t.prototype.render = function () {
                            var e,
                                t,
                                a = this,
                                n = u()(m()(this.props, 'pageContext.site.data.doc_sections.root_docs_path', null), '/'),
                                s = u()(m()(this.props, 'pageContext.url', null), '/');
                            return g.a.createElement(
                                E.a,
                                this.props,
                                g.a.createElement(
                                    'div',
                                    { className: 'inner outer' },
                                    g.a.createElement(
                                        'div',
                                        { className: 'docs-content' },
                                        g.a.createElement(
                                            v.a,
                                            Object.assign({}, this.props, { page: this.props.pageContext, site: this.props.pageContext.site })
                                        ),
                                        g.a.createElement(
                                            'article',
                                            { className: 'post type-docs' },
                                            g.a.createElement(
                                                'div',
                                                { className: 'post-inside' },
                                                g.a.createElement(
                                                    'header',
                                                    { className: 'post-header' },
                                                    g.a.createElement(
                                                        'h1',
                                                        { className: 'post-title line-left' },
                                                        m()(this.props, 'pageContext.frontmatter.title', null)
                                                    )
                                                ),
                                                g.a.createElement(
                                                    'div',
                                                    { className: 'post-content' },
                                                    Object(N.f)(m()(this.props, 'pageContext.html', null)),
                                                    n !== s &&
                                                        ((e = o()(Object(N.e)(a.props.pageContext.pages, s), 'frontmatter.weight')),
                                                        (t = l()(e) > 0),
                                                        g.a.createElement(
                                                            g.a.Fragment,
                                                            null,
                                                            t &&
                                                                g.a.createElement(
                                                                    'ul',
                                                                    { id: 'docs-section-items', className: 'docs-section-items' },
                                                                    i()(e, function (e, t) {
                                                                        return g.a.createElement(
                                                                            'li',
                                                                            { key: t, className: 'docs-section-item' },
                                                                            g.a.createElement(
                                                                                N.a,
                                                                                { to: Object(N.j)(m()(e, 'url', null)), className: 'docs-item-link' },
                                                                                m()(e, 'frontmatter.title', null),
                                                                                g.a.createElement('span', {
                                                                                    className: 'icon-angle-right',
                                                                                    'aria-hidden': 'true'
                                                                                })
                                                                            )
                                                                        );
                                                                    })
                                                                )
                                                        ))
                                                )
                                            )
                                        ),
                                        g.a.createElement(
                                            'nav',
                                            { id: 'page-nav', className: 'page-nav' },
                                            g.a.createElement(
                                                'div',
                                                { id: 'page-nav-inside', className: 'page-nav-inside sticky' },
                                                g.a.createElement('h2', { className: 'page-nav-title' }, 'Jump to Section'),
                                                g.a.createElement('div', { id: 'page-nav-link-container' })
                                            )
                                        )
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(g.a.Component);
        }
    }
]);
//# sourceMappingURL=component---src-templates-docs-js-04c8725434b0191ce73b.js.map
