'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7648],
  {
    57351: (e, t, o) => {
      o.r(t), o.d(t, { showThemeSaveDialog: () => r });
      var n = o(11542),
        a = o(3615),
        l = o(85662),
        i = o(51768),
        s = o(30575);
      function r(e, t, r, u) {
        function m(o) {
          (0, l.saveTheme)(o, e).then(() => {
            t && t(o);
          }),
            (0, i.trackEvent)('GUI', 'Themes', 'Save custom theme');
        }
        (0, a.showRename)({
          title: n.t(null, void 0, o(79355)),
          text: n.t(null, void 0, o(59233)) + ':',
          maxLength: 128,
          source: r || [],
          onClose: u,
          autocompleteFilter: s.autocompleteFilter,
          onRename: ({ newValue: e, focusInput: t, dialogClose: i, innerManager: s }) =>
            new Promise(r => {
              (0, l.isThemeExist)(e).then(l => {
                if (l) {
                  const l = n.t(null, { replace: { themeName: e } }, o(41018));
                  (0, a.showConfirm)(
                    {
                      text: l,
                      onConfirm: ({ dialogClose: t }) => {
                        m(e), t(), i();
                      },
                      onClose: t,
                    },
                    s,
                  ).then(() => {
                    r();
                  });
                } else m(e), r(), i();
              });
            }),
        });
      }
    },
    30575: (e, t, o) => {
      function n(e, t) {
        return Boolean('' === e || (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())));
      }
      o.d(t, { autocompleteFilter: () => n });
    },
  },
]);
