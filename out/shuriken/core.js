// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.core');
goog.require('cljs.core');
goog.require('shuriken.associative');
goog.require('shuriken.exception');
goog.require('shuriken.sequential');
goog.require('shuriken.spec');
goog.require('shuriken.string');
shuriken.core.map_keys = shuriken.associative.map_keys;

shuriken.core.map_vals = shuriken.associative.map_vals;

shuriken.core.filter_keys = shuriken.associative.filter_keys;

shuriken.core.filter_vals = shuriken.associative.filter_vals;

shuriken.core.remove_keys = shuriken.associative.remove_keys;

shuriken.core.remove_vals = shuriken.associative.remove_vals;

shuriken.core.flatten_keys = shuriken.associative.flatten_keys;

shuriken.core.deflatten_keys = shuriken.associative.deflatten_keys;

shuriken.core.deep_merge = shuriken.associative.deep_merge;

shuriken.core.index_by = shuriken.associative.index_by;

shuriken.core.unindex = shuriken.associative.unindex;

shuriken.core.plan_merge = shuriken.associative.plan_merge;

shuriken.core.merge_with_plan = shuriken.associative.merge_with_plan;

shuriken.core.continue_BAR_ = shuriken.associative.continue_BAR_;

shuriken.core.split_map = shuriken.associative.split_map;

shuriken.core.map_difference = shuriken.associative.map_difference;

shuriken.core.map_intersection = shuriken.associative.map_intersection;

shuriken.core.submap_QMARK_ = shuriken.associative.submap_QMARK_;

shuriken.core.getsoc = shuriken.associative.getsoc;

shuriken.core.silence = shuriken.exception.silence;

shuriken.core.thrown_QMARK_ = shuriken.exception.thrown_QMARK_;

shuriken.core.import_namespace_vars = shuriken.namespace.import_namespace_vars;

shuriken.core.conf = shuriken.spec.conf;

shuriken.core.either = shuriken.spec.either;

shuriken.core.conform_BANG_ = shuriken.spec.conform_BANG_;

shuriken.core.adjust = shuriken.string.adjust;

shuriken.core.format_code = shuriken.string.format_code;

shuriken.core.join_lines = shuriken.string.join_lines;

shuriken.core.join_words = shuriken.string.join_words;

shuriken.core.lines = shuriken.string.lines;

shuriken.core.no_print = shuriken.string.no_print;

shuriken.core.tabulate = shuriken.string.tabulate;

shuriken.core.truncate = shuriken.string.truncate;

shuriken.core.words = shuriken.string.words;
shuriken.core.form = shuriken.sequential.form;

shuriken.core.removev = shuriken.sequential.removev;

shuriken.core.filterm = shuriken.sequential.filterm;

shuriken.core.compactm = shuriken.sequential.compactm;

shuriken.core.takecatv = shuriken.sequential.takecatv;

shuriken.core.def_compound_seq_fns = shuriken.sequential.def_compound_seq_fns;

shuriken.core.removem = shuriken.sequential.removem;

shuriken.core.filtercatm = shuriken.sequential.filtercatm;

shuriken.core.update_nth_in = shuriken.sequential.update_nth_in;

shuriken.core.keeps = shuriken.sequential.keeps;

shuriken.core.max_by = shuriken.sequential.max_by;

shuriken.core.takecatstr = shuriken.sequential.takecatstr;

shuriken.core.get_nth = shuriken.sequential.get_nth;

shuriken.core.dropcat = shuriken.sequential.dropcat;

shuriken.core.mapcatm = shuriken.sequential.mapcatm;

shuriken.core.mapstr = shuriken.sequential.mapstr;

shuriken.core.forcatm = shuriken.sequential.forcatm;

shuriken.core.takecat = shuriken.sequential.takecat;

shuriken.core.removecatv = shuriken.sequential.removecatv;

shuriken.core.takecats = shuriken.sequential.takecats;

shuriken.core.drops = shuriken.sequential.drops;

shuriken.core.compactv = shuriken.sequential.compactv;

shuriken.core.compacts = shuriken.sequential.compacts;

shuriken.core.keepcatv = shuriken.sequential.keepcatv;

shuriken.core.removecatstr = shuriken.sequential.removecatstr;

shuriken.core.forcat = shuriken.sequential.forcat;

shuriken.core.keepcatm = shuriken.sequential.keepcatm;

shuriken.core.get_some = shuriken.sequential.get_some;

shuriken.core.takestr = shuriken.sequential.takestr;

shuriken.core.keepcatstr = shuriken.sequential.keepcatstr;

shuriken.core.dropm = shuriken.sequential.dropm;

shuriken.core.min_by = shuriken.sequential.min_by;

shuriken.core.dropcatm = shuriken.sequential.dropcatm;

shuriken.core.takev = shuriken.sequential.takev;

shuriken.core.separate = shuriken.sequential.separate;

shuriken.core.keepcat = shuriken.sequential.keepcat;

shuriken.core.filters = shuriken.sequential.filters;

shuriken.core.insert_at = shuriken.sequential.insert_at;

shuriken.core.dropstr = shuriken.sequential.dropstr;

shuriken.core.compactcatv = shuriken.sequential.compactcatv;

shuriken.core.filtercats = shuriken.sequential.filtercats;

shuriken.core.mapcatstr = shuriken.sequential.mapcatstr;

shuriken.core.compactcatstr = shuriken.sequential.compactcatstr;

shuriken.core.keepm = shuriken.sequential.keepm;

shuriken.core.dropv = shuriken.sequential.dropv;

shuriken.core.removecats = shuriken.sequential.removecats;

shuriken.core.compact = shuriken.sequential.compact;

shuriken.core.removecat = shuriken.sequential.removecat;

shuriken.core.compactstr = shuriken.sequential.compactstr;

shuriken.core.dropcatstr = shuriken.sequential.dropcatstr;

shuriken.core.removes = shuriken.sequential.removes;

shuriken.core.removecatm = shuriken.sequential.removecatm;

shuriken.core.keepv = shuriken.sequential.keepv;

shuriken.core.forcatstr = shuriken.sequential.forcatstr;

shuriken.core.filterstr = shuriken.sequential.filterstr;

shuriken.core.keepstr = shuriken.sequential.keepstr;

shuriken.core.filtercatstr = shuriken.sequential.filtercatstr;

shuriken.core.forcatv = shuriken.sequential.forcatv;

shuriken.core.compactcatm = shuriken.sequential.compactcatm;

shuriken.core.assoc_nth_in = shuriken.sequential.assoc_nth_in;

shuriken.core.filtercat = shuriken.sequential.filtercat;

shuriken.core.mapcats = shuriken.sequential.mapcats;

shuriken.core.forcats = shuriken.sequential.forcats;

shuriken.core.filtercatv = shuriken.sequential.filtercatv;

shuriken.core.maps = shuriken.sequential.maps;

shuriken.core.compactcats = shuriken.sequential.compactcats;

shuriken.core.get_nth_in = shuriken.sequential.get_nth_in;

shuriken.core.takem = shuriken.sequential.takem;

shuriken.core.update_nth = shuriken.sequential.update_nth;

shuriken.core.fors = shuriken.sequential.fors;

shuriken.core.forv = shuriken.sequential.forv;

shuriken.core.slice = shuriken.sequential.slice;

shuriken.core.keepcats = shuriken.sequential.keepcats;

shuriken.core.mapm = shuriken.sequential.mapm;

shuriken.core.mapcatv = shuriken.sequential.mapcatv;

shuriken.core.takes = shuriken.sequential.takes;

shuriken.core.dropcats = shuriken.sequential.dropcats;

shuriken.core.assoc_nth = shuriken.sequential.assoc_nth;

shuriken.core.removestr = shuriken.sequential.removestr;

shuriken.core.takecatm = shuriken.sequential.takecatm;

shuriken.core.compactcat = shuriken.sequential.compactcat;

shuriken.core.forstr = shuriken.sequential.forstr;

shuriken.core.dropcatv = shuriken.sequential.dropcatv;

//# sourceMappingURL=core.js.map
