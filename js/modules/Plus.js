function plus (a, b) {
    // TODO typechecks löschen
    if (!a || typeof a !== 'number' || !b || typeof b !== 'number') {
        return null;
    }
    return Math.sqrt(
        (- (-a -(-(-(-(-b)))))) *
        (a -(-(-(-(-(-(-(-b))))))))
    );
}

export default plus;