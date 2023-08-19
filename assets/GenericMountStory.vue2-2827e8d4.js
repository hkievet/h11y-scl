import { S as SvelteComponentDev, Q as init, R as dispatch_dev, U as safe_not_equal, V as validate_slots, W as create_component, X as claim_component, Y as mount_component, Z as transition_in, _ as transition_out, $ as destroy_component, a0 as text, a1 as claim_text, a2 as insert_hydration_dev, a3 as detach_dev, a4 as Comp1, a5 as Logo_square, a6 as Logo_dark, a7 as createRouter, a8 as createWebHistory, a9 as createWebHashHistory, aa as useDark, ab as useToggle, k as watch, ac as markRaw, E as reactive, d as defineComponent, r as ref, ad as watchEffect, o as openBlock, q as createBlock, ae as mergeProps, af as resolveDynamicComponent, h as createCommentVNode } from "./vendor-e6dea139.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function create_default_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("🐱");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "🐱");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(5:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Form_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Form_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Form_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Form_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Form_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Form_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Form_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-lib-inputs-form-story-svelte", "path": ["Form"], "filePath": "src/lib/inputs/Form.story.svelte", "story": { "id": "src-lib-inputs-form-story-svelte", "title": "Form", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: Form_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-inputs-form-story-svelte-a8872061.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/Users/hkievet/Coding/h11y-scl/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-e1092561.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 1 }] }, { "title": "Form", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/hkievet/Coding/h11y-scl/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/Users/hkievet/Coding/h11y-scl/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"], "setupFile": "./src/histoire-setup.ts" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-983470bc.js"), true ? ["assets/HomeView.vue-983470bc.js","assets/vendor-e6dea139.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-5edec029.js"), true ? ["assets/StoryView.vue-5edec029.js","assets/vendor-e6dea139.js","assets/MobileOverlay.vue2-73e845b6.js","assets/BaseEmpty.vue-c5421fad.js","assets/state-1706ee26.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-e6dea139.js").then((n) => n.aK), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-e6dea139.js").then((n) => n.aL), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
