class Field {
  constructor(key, label) {
    this.key = key;
    this.label = label;
  }
}

class TableField extends Field {
  constructor(key, label, sortable, headerAbbr) {
    super(key, label);
    this.sortable = sortable;
    this.headerAbbr = headerAbbr;
  }
}
class InputField extends Field {
  constructor(key, label, type) {
    super(key, label);
    this.type = type;
  }
}
