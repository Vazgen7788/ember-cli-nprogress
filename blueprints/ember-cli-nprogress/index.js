module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackageToProject('nprogress', 'alexlafroscia/nprogress#allow-alternate-scheduler');
  }
};
