var SnapshotArray = function (length) {
  this.curr = {};
  this.snaps = [];
  this.hasChanges = false;
};

SnapshotArray.prototype.set = function (idx, val) {
  this.curr[idx] = val;
  this.hasChanges = true;
};

SnapshotArray.prototype.snap = function () {
  if (this.hasChanges || this.snaps.length === 0) {
    this.snaps.push({ ...this.curr });
  } else {
    this.snaps.push(this.snaps[this.snaps.length - 1]);
  }
  this.hasChanges = false;
  return this.snaps.length - 1;
};

SnapshotArray.prototype.get = function (idx, snap_id) {
  return this.snaps[snap_id][idx] || 0;
};
