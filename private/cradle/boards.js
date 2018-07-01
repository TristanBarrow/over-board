module.exports = (arg, use) => {
    if (use === true) {
        switch (arg) {
            case 'skate':
                return 'Skateboard';
            case 'ldp':
                return 'Longboard - Long Distance';
            case 'downhill':
                return 'Longboard - Downhill';
            case 'snow':
                return 'Snowboard';
            default:
                throw new Error('Wrong arguments to boards look up table.');
        }
    } else if (use === false) {
        switch (arg) {
            case 'Skateboard':
                return 'skate';
            case 'Longboard - Long Distance':
                return 'ldp';
            case 'Longboard - Downhill':
                return 'downhill';
            case 'Snowboard':
                return 'snow';
            default:
                throw new Error('Wrong arguments to boards look up table.');
        }
    } else {
        throw new Error('Wrong arguments to boards look up table.');
    }
};