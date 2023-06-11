class SnapshotArray {
  constructor(length) {
    this.elements = Array(length).fill(0);
    this.snapshots = new Map();
    this.snapId = -1;
    this.changedElements = new Set();
  }

  set(index, val) {
    this.elements[index] = val;
    this.changedElements.add(index);
  }

  snap() {
    ++this.snapId;
    const snapshot = new Map();
    for (const index of this.changedElements) {
      snapshot.set(index, this.elements[index]);
    }
    this.snapshots.set(this.snapId, snapshot);
    this.changedElements.clear();
    return this.snapId;
  }

  get(index, snap_id) {
    if (!this.snapshots.has(snap_id)) return -1;

    const snapshot = this.snapshots.get(snap_id);
    if (snapshot.has(index)) {
      return snapshot.get(index);
    } else {
      return this.elements[index];
    }
  }
}
