package clojure.lang;

import clojure.lang.SeqIterator;
import clojure.lang.ICopyableSeqIterator;
import clojure.lang.ISeq;

public class CopyableSeqIterator extends SeqIterator implements ICopyableSeqIterator {

    public CopyableSeqIterator(Object o) {
        super(o);
    }
    
    public CopyableSeqIterator(ISeq seq) {
        super(seq);
    }

    // Copy constructor that copies the state of another SeqIterator
    public CopyableSeqIterator(SeqIterator other) {
        this(other.next);
        this.seq = other.seq;
    }
  
    // Method to copy the iterator in constant time
    public ICopyableSeqIterator copy() {
        return new CopyableSeqIterator(this);
    }
}