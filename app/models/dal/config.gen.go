// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"go-zero-single/app/models/models"
)

func newConfig(db *gorm.DB, opts ...gen.DOOption) config {
	_config := config{}

	_config.configDo.UseDB(db, opts...)
	_config.configDo.UseModel(&models.Config{})

	tableName := _config.configDo.TableName()
	_config.ALL = field.NewAsterisk(tableName)
	_config.ID = field.NewInt32(tableName, "id")
	_config.ConfigKey = field.NewString(tableName, "config_key")
	_config.ConfigValue = field.NewString(tableName, "config_value")
	_config.ConfigType = field.NewString(tableName, "config_type")
	_config.Description = field.NewString(tableName, "description")
	_config.CreatedAt = field.NewTime(tableName, "created_at")
	_config.UpdatedAt = field.NewTime(tableName, "updated_at")

	_config.fillFieldMap()

	return _config
}

type config struct {
	configDo

	ALL         field.Asterisk
	ID          field.Int32
	ConfigKey   field.String // 配置键
	ConfigValue field.String // 配置值
	ConfigType  field.String // 配置值类型
	Description field.String // 配置描述
	CreatedAt   field.Time   // 创建时间
	UpdatedAt   field.Time   // 更新时间

	fieldMap map[string]field.Expr
}

func (c config) Table(newTableName string) *config {
	c.configDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c config) As(alias string) *config {
	c.configDo.DO = *(c.configDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *config) updateTableName(table string) *config {
	c.ALL = field.NewAsterisk(table)
	c.ID = field.NewInt32(table, "id")
	c.ConfigKey = field.NewString(table, "config_key")
	c.ConfigValue = field.NewString(table, "config_value")
	c.ConfigType = field.NewString(table, "config_type")
	c.Description = field.NewString(table, "description")
	c.CreatedAt = field.NewTime(table, "created_at")
	c.UpdatedAt = field.NewTime(table, "updated_at")

	c.fillFieldMap()

	return c
}

func (c *config) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *config) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 7)
	c.fieldMap["id"] = c.ID
	c.fieldMap["config_key"] = c.ConfigKey
	c.fieldMap["config_value"] = c.ConfigValue
	c.fieldMap["config_type"] = c.ConfigType
	c.fieldMap["description"] = c.Description
	c.fieldMap["created_at"] = c.CreatedAt
	c.fieldMap["updated_at"] = c.UpdatedAt
}

func (c config) clone(db *gorm.DB) config {
	c.configDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c config) replaceDB(db *gorm.DB) config {
	c.configDo.ReplaceDB(db)
	return c
}

type configDo struct{ gen.DO }

func (c configDo) Debug() *configDo {
	return c.withDO(c.DO.Debug())
}

func (c configDo) WithContext(ctx context.Context) *configDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c configDo) ReadDB() *configDo {
	return c.Clauses(dbresolver.Read)
}

func (c configDo) WriteDB() *configDo {
	return c.Clauses(dbresolver.Write)
}

func (c configDo) Session(config *gorm.Session) *configDo {
	return c.withDO(c.DO.Session(config))
}

func (c configDo) Clauses(conds ...clause.Expression) *configDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c configDo) Returning(value interface{}, columns ...string) *configDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c configDo) Not(conds ...gen.Condition) *configDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c configDo) Or(conds ...gen.Condition) *configDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c configDo) Select(conds ...field.Expr) *configDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c configDo) Where(conds ...gen.Condition) *configDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c configDo) Order(conds ...field.Expr) *configDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c configDo) Distinct(cols ...field.Expr) *configDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c configDo) Omit(cols ...field.Expr) *configDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c configDo) Join(table schema.Tabler, on ...field.Expr) *configDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c configDo) LeftJoin(table schema.Tabler, on ...field.Expr) *configDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c configDo) RightJoin(table schema.Tabler, on ...field.Expr) *configDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c configDo) Group(cols ...field.Expr) *configDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c configDo) Having(conds ...gen.Condition) *configDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c configDo) Limit(limit int) *configDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c configDo) Offset(offset int) *configDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c configDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *configDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c configDo) Unscoped() *configDo {
	return c.withDO(c.DO.Unscoped())
}

func (c configDo) Create(values ...*models.Config) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c configDo) CreateInBatches(values []*models.Config, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c configDo) Save(values ...*models.Config) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c configDo) First() (*models.Config, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.Config), nil
	}
}

func (c configDo) Take() (*models.Config, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.Config), nil
	}
}

func (c configDo) Last() (*models.Config, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.Config), nil
	}
}

func (c configDo) Find() ([]*models.Config, error) {
	result, err := c.DO.Find()
	return result.([]*models.Config), err
}

func (c configDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Config, err error) {
	buf := make([]*models.Config, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c configDo) FindInBatches(result *[]*models.Config, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c configDo) Attrs(attrs ...field.AssignExpr) *configDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c configDo) Assign(attrs ...field.AssignExpr) *configDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c configDo) Joins(fields ...field.RelationField) *configDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c configDo) Preload(fields ...field.RelationField) *configDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c configDo) FirstOrInit() (*models.Config, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.Config), nil
	}
}

func (c configDo) FirstOrCreate() (*models.Config, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.Config), nil
	}
}

func (c configDo) FindByPage(offset int, limit int) (result []*models.Config, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c configDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c configDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c configDo) Delete(models ...*models.Config) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *configDo) withDO(do gen.Dao) *configDo {
	c.DO = *do.(*gen.DO)
	return c
}
