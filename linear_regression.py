class LinearRegression:
    def __init__(self):
        self.slope = None
        self.intercept = None

    def fit(self, x, y):
        if len(x) != len(y):
            raise ValueError("x 和 y 的长度必须一致")
        if len(x) < 2:
            raise ValueError("至少需要两个数据点")

        n = len(x)
        x_mean = sum(x) / n
        y_mean = sum(y) / n

        numerator = sum((xi - x_mean) * (yi - y_mean) for xi, yi in zip(x, y))
        denominator = sum((xi - x_mean) ** 2 for xi in x)

        if denominator == 0:
            raise ValueError("x 的值不能全部相同")

        self.slope = numerator / denominator
        self.intercept = y_mean - self.slope * x_mean

    def predict(self, x):
        if self.slope is None or self.intercept is None:
            raise ValueError("请先调用 fit 方法训练模型")
        return [self.slope * xi + self.intercept for xi in x]


if __name__ == "__main__":
    x_train = [1, 2, 3, 4, 5,6,7,9,10,11]
    y_train = [3, 5, 7, 9, 11]

    model = LinearRegression()
    model.fit(x_train, y_train)

    print(f"slope: {model.slope}")
    print(f"intercept: {model.intercept}")

    x_test = [6, 7, 8]
    predictions = model.predict(x_test)
    print("predictions:", predictions)
