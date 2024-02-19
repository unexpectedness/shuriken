package clojure.lang;

import java.util.Iterator;

public interface ICopyableSeqIterator extends Iterator {
    public ICopyableSeqIterator copy();
}