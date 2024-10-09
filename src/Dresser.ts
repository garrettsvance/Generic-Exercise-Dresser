type Socks = { style: string; color: string }
type Shirt = { style: string; size: string; }
type Pants = { waist: number; length: number; }

class Drawer<T> {
    private items: T[] = [];

    get isEmpty(): boolean {
        return this.items.length === 0;
    }

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(): T | undefined {
        return this.items.pop();
    }

    removeAll(): T[] {
        const allItems = [...this.items];
        this.items = [];
        return allItems;
    }
}

class Dresser<T1, T2, T3> {
    public topDrawer: Drawer<T1>;
    public middleDrawer: Drawer<T2>;
    public bottomDrawer: Drawer<T3>;

    constructor() {
        this.topDrawer = new Drawer<T1>();
        this.middleDrawer = new Drawer<T2>();
        this.bottomDrawer = new Drawer<T3>();
    }
}

function demonstrateFunctionality() {

    const tempDresser = new Dresser<Socks, Shirt, Pants>;

    let sock1: Socks = {style: "ankle", color: "black"};
    let shirt1: Shirt = {style: "Tshirt", size: "MD"};
    let shirt2: Shirt = {style: "longsleeve", size: "MD"};
    let pants1: Pants = {waist: 38, length: 28};

    console.log("Empty Dresser: " + tempDresser.topDrawer.isEmpty);

    tempDresser.topDrawer.addItem(sock1);
    tempDresser.middleDrawer.addItem(shirt1);
    tempDresser.middleDrawer.addItem(shirt2);
    tempDresser.bottomDrawer.addItem(pants1);

    console.log("Top Drawer: " + tempDresser.topDrawer);
    console.log("Middle Drawer: " + tempDresser.middleDrawer);
    console.log("Bottom Drawer: " + tempDresser.bottomDrawer);

    tempDresser.topDrawer.removeItem();
    console.log("Item Removed: " + tempDresser.topDrawer.isEmpty);

    tempDresser.middleDrawer.removeAll();
    console.log("Empty Middle Drawer: " + tempDresser.middleDrawer.isEmpty);

}

demonstrateFunctionality();