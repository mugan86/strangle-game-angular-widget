import { Key } from './key.interface';
function keyValues(withNumber: boolean = false): string[][] {
    if (!withNumber) {
        return [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
        ];
    }
    return [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];
}

export function createKeyBoardKeys(withNumber: boolean = false) {
    const keys = keyValues(withNumber);
    const keyElements: Key[][] = [];
    keys.map(
        row => {
            const rowKeys: Key[] = [];
            row.map( key => {
                rowKeys.push({
                    char: key,
                    active: true
                });
            });
            keyElements.push(rowKeys);
        }
    );
    return keyElements;
}

